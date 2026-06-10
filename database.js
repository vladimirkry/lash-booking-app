(function () {
  const SETTINGS_ID = "main";

  function getConfig() {
    return window.LASH_SUPABASE || {};
  }

  function isConfigured() {
    const config = getConfig();
    return Boolean(config.url && config.anonKey && window.supabase?.createClient);
  }

  let client;

  function getClient() {
    if (!isConfigured()) return null;
    if (!client) {
      const config = getConfig();
      client = window.supabase.createClient(config.url, config.anonKey);
    }
    return client;
  }

  async function loadAll() {
    const supabaseClient = getClient();
    if (!supabaseClient) return null;

    try {
      const [settingsResult, bookingsResult, requestsResult] = await Promise.all([
        supabaseClient.from("app_settings").select("data").eq("id", SETTINGS_ID).maybeSingle(),
        supabaseClient.from("bookings").select("*").order("booking_date", { ascending: true }).order("booking_time", { ascending: true }),
        supabaseClient.from("booking_requests").select("*").order("created_at", { ascending: false }),
      ]);

      throwIfError(settingsResult.error);
      throwIfError(bookingsResult.error);
      throwIfError(requestsResult.error);

      return {
        settings: settingsResult.data?.data || null,
        bookings: (bookingsResult.data || []).map(fromBookingRow),
        requests: (requestsResult.data || []).map(fromRequestRow),
      };
    } catch (error) {
      console.warn("Supabase load failed. Local mode is still available.", error);
      return null;
    }
  }

  async function saveSettings(settings) {
    const supabaseClient = getClient();
    if (!supabaseClient) return false;

    try {
      const result = await supabaseClient.from("app_settings").upsert({
        id: SETTINGS_ID,
        data: settings,
        updated_at: new Date().toISOString(),
      });
      throwIfError(result.error);
      return true;
    } catch (error) {
      console.warn("Supabase settings save failed.", error);
      return false;
    }
  }

  async function replaceBookings(bookings) {
    const supabaseClient = getClient();
    if (!supabaseClient) return false;

    try {
      const deleteResult = await supabaseClient.from("bookings").delete().neq("id", "__never__");
      throwIfError(deleteResult.error);

      if (bookings.length) {
        const insertResult = await supabaseClient.from("bookings").insert(bookings.map(toBookingRow));
        throwIfError(insertResult.error);
      }

      return true;
    } catch (error) {
      console.warn("Supabase bookings save failed.", error);
      return false;
    }
  }

  async function replaceRequests(requests) {
    const supabaseClient = getClient();
    if (!supabaseClient) return false;

    try {
      const deleteResult = await supabaseClient.from("booking_requests").delete().neq("id", "__never__");
      throwIfError(deleteResult.error);

      if (requests.length) {
        const insertResult = await supabaseClient.from("booking_requests").insert(requests.map(toRequestRow));
        throwIfError(insertResult.error);
      }

      return true;
    } catch (error) {
      console.warn("Supabase requests save failed.", error);
      return false;
    }
  }

  function toBookingRow(booking) {
    return {
      id: booking.id,
      client_name: booking.clientName,
      client_phone: booking.clientPhone,
      service_id: booking.serviceId,
      duration: booking.duration,
      booking_date: booking.date,
      booking_time: booking.time,
      note: booking.note || "",
      source: booking.source,
      status: booking.status,
      created_at: booking.createdAt,
    };
  }

  function fromBookingRow(row) {
    return {
      id: row.id,
      clientName: row.client_name,
      clientPhone: row.client_phone,
      serviceId: row.service_id,
      duration: row.duration,
      date: row.booking_date,
      time: String(row.booking_time).slice(0, 5),
      note: row.note || "",
      source: row.source,
      status: row.status,
      createdAt: row.created_at,
    };
  }

  function toRequestRow(request) {
    return {
      id: request.id,
      name: request.name,
      phone: request.phone,
      request_type: request.type,
      message: request.message,
      status: request.status,
      created_at: request.createdAt,
    };
  }

  function fromRequestRow(row) {
    return {
      id: row.id,
      name: row.name,
      phone: row.phone,
      type: row.request_type,
      message: row.message,
      status: row.status,
      createdAt: row.created_at,
    };
  }

  function throwIfError(error) {
    if (error) throw error;
  }

  window.LashDatabase = {
    isConfigured,
    loadAll,
    saveSettings,
    replaceBookings,
    replaceRequests,
  };
})();

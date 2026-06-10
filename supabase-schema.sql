create table if not exists app_settings (
  id text primary key,
  data jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

create table if not exists bookings (
  id text primary key,
  client_name text not null,
  client_phone text not null,
  service_id text not null,
  duration integer not null,
  booking_date date not null,
  booking_time time not null,
  note text not null default '',
  source text not null default 'client',
  status text not null default 'pending',
  created_at timestamptz not null default now()
);

create table if not exists booking_requests (
  id text primary key,
  name text not null,
  phone text not null,
  request_type text not null,
  message text not null,
  status text not null default 'new',
  created_at timestamptz not null default now()
);

alter table app_settings enable row level security;
alter table bookings enable row level security;
alter table booking_requests enable row level security;

drop policy if exists "Temporary public app settings access" on app_settings;
drop policy if exists "Temporary public bookings access" on bookings;
drop policy if exists "Temporary public booking requests access" on booking_requests;

create policy "Temporary public app settings access"
on app_settings
for all
to anon
using (true)
with check (true);

create policy "Temporary public bookings access"
on bookings
for all
to anon
using (true)
with check (true);

create policy "Temporary public booking requests access"
on booking_requests
for all
to anon
using (true)
with check (true);

insert into app_settings (id, data)
values (
  'main',
  '{
    "slotStep": 30,
    "weeklyHours": {
      "sun": { "enabled": false, "start": "10:00", "end": "16:00" },
      "mon": { "enabled": true, "start": "09:00", "end": "18:00" },
      "tue": { "enabled": true, "start": "09:00", "end": "18:00" },
      "wed": { "enabled": true, "start": "09:00", "end": "18:00" },
      "thu": { "enabled": true, "start": "09:00", "end": "18:00" },
      "fri": { "enabled": true, "start": "09:00", "end": "18:00" },
      "sat": { "enabled": true, "start": "10:00", "end": "16:00" }
    },
    "daysOff": []
  }'::jsonb
)
on conflict (id) do nothing;

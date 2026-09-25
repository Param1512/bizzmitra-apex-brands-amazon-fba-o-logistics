import { supabase, SUPABASE_URL } from './supabase';

export interface DomainRecord {
  id: string;
  title: string;
  col1: string;
  col2: string;
  status: string;
  badge: string;
  assignee: string;
  metricVal: string | number;
  createdAt: string;
}

export interface DomainDemoUser {
  id: string;
  name: string;
  email: string;
  password?: string;
  role: string;
  badge: string;
  department: string;
  avatar?: string;
  permissions: string[];
}

export interface DomainArchitectureItem {
  id: string;
  title: string;
  type: string;
  tech: string;
  status: string;
  description: string;
  endpointOrTable: string;
  metrics: string;
}

export interface DomainRoadmapSprint {
  id: string;
  title: string;
  timeline: string;
  badge: string;
  progress: number;
  deliverables: string[];
  tasks: { id: string; name: string; status: string; done: boolean }[];
}

export const DOMAIN_SCHEMA = {
  domainKey: "logistics",
  domainName: "Fleet Dispatch & Telematics Control",
  appTitle: "Apex Brands — Amazon FBA Optimizer",
  entityName: "Consignment Shipment",
  entityPlural: "Shipments",
  tagline: "Consignment routing, GPS vehicle telemetry, and automated electronic Proof-of-Delivery.",
  problemStatement: "We are an Amazon FBA seller managing 450+ ASINs across US and India marketplaces. We are suffering frequent stockouts on top-selling items during seasonal spikes, which crashes our Amazon Best Seller Rank (BSR) and costs us ~$45k/month in lost revenue. Simultaneously, our slow-moving SKUs are hitting 180+ day thresholds, costing $8,000/month in Amazon aged inventory surcharges. Our team is manually reconciling Amazon Seller Central Inventory CSVs in Excel with 3-week lead-time suppliers, leading to inaccurate reorder points and zero predictive visibility.",
  columns: {
  "idLabel": "Waybill Tracking ID",
  "col1Label": "Origin → Destination Hub",
  "col2Label": "Fleet Vehicle & Speed",
  "statusLabel": "Transit Status",
  "assigneeLabel": "Assigned Driver",
  "metricLabel": "ETA Turnaround"
},
  statuses: [
  "Manifest Created",
  "In Transit",
  "Out for Delivery",
  "Delivered & POD Verified"
],
  kpis: [
  {
    "label": "On-Time Dispatch Rate",
    "value": "98.9%",
    "change": "+6.1% vs last month",
    "trend": "up"
  },
  {
    "label": "Fleet Vehicle Utilization",
    "value": "92.4%",
    "change": "42 of 45 en route",
    "trend": "up"
  },
  {
    "label": "Average Delivery TAT",
    "value": "3.2 Hours",
    "change": "Dynamic route optimal",
    "trend": "up"
  },
  {
    "label": "Electronic POD Verification",
    "value": "100%",
    "change": "OTP & Geotagged",
    "trend": "neutral"
  }
],
  funnelStages: [
  {
    "stage": "Consignment Manifest Booking",
    "count": "320 Shipments",
    "pct": 100
  },
  {
    "stage": "Vehicle Load & Weighbridge",
    "count": "290 Dispatched",
    "pct": 90
  },
  {
    "stage": "Corridor GPS Telematics En Route",
    "count": "260 In Transit",
    "pct": 81
  },
  {
    "stage": "Last-Mile POD OTP Verified",
    "count": "240 Delivered",
    "pct": 75
  }
],
  activities: [
  {
    "title": "Waybill #WB-7721 entered Mumbai-Pune Expressway",
    "subtitle": "MH-12-RN-4021 · Speed 62 km/h · ETA 19:30",
    "timeAgo": "5 mins ago"
  },
  {
    "title": "Chilled Pharma consignment #WB-7722 delivered",
    "subtitle": "Geotagged OTP confirmation verified at Gurgaon Lab",
    "timeAgo": "14 mins ago"
  },
  {
    "title": "Dynamic route re-routed Truck #KA-01-3390",
    "subtitle": "Avoided 45 min traffic delay near Hebbal Flyover",
    "timeAgo": "28 mins ago"
  }
],
  modules: [
  {
    "id": "overview",
    "title": "Operations Command Center",
    "description": "High-density operational telemetry, throughput pipelines, and real-time alerts for Fleet Dispatch & Telematics Control.",
    "icon": "Building2"
  },
  {
    "id": "portal",
    "title": "Shipments Workflow Registry",
    "description": "Live CRUD registry, state pipeline transitions, barcode verifications, and audit logging.",
    "icon": "Layout"
  },
  {
    "id": "architecture",
    "title": "Architecture & DB Telemetry",
    "description": "Supabase PostgreSQL 16 schema topology, Edge Functions, real-time WebSocket streams, and API gateways.",
    "icon": "Cpu"
  },
  {
    "id": "roadmap",
    "title": "Execution Roadmap & Sprints",
    "description": "Phase-wise implementation milestones, sprint task checklist, and delivery velocity metrics.",
    "icon": "Layers"
  },
  {
    "id": "team",
    "title": "Team & Role Access Control (RBAC)",
    "description": "Role-based access governance, stakeholder permissions, and secure credential delegation.",
    "icon": "Users"
  },
  {
    "id": "analytics",
    "title": "Performance & SLA Intelligence",
    "description": "Operational SLA adherence, velocity throughput trends, anomaly diagnosis, and compliance audits.",
    "icon": "BarChart3"
  }
],
  initialRecords: [
  {
    "id": "WB-7721",
    "title": "Precision Industrial CNC Spare Parts Consignment (480 kg)",
    "col1": "Mumbai Hub → Pune Central",
    "col2": "MH-12-RN-4021 · 62 km/h",
    "status": "In Transit",
    "badge": "On Schedule",
    "assignee": "Driver Ramesh Kumar",
    "metricVal": "1.5h ETA",
    "createdAt": "Today, 17:40"
  },
  {
    "id": "WB-7722",
    "title": "Cold-Chain Temperature Controlled Insulin Diagnostic Kits",
    "col1": "Delhi Airport → Gurgaon Lab",
    "col2": "DL-1A-EE-9012 · 45 km/h",
    "status": "Out for Delivery",
    "badge": "4°C Chilled OK",
    "assignee": "Driver Suresh Yadav",
    "metricVal": "25m ETA",
    "createdAt": "Today, 17:15"
  },
  {
    "id": "WB-7723",
    "title": "Enterprise Server Hardware & Rack Mount Switches",
    "col1": "Bengaluru East → Whitefield Tech Park",
    "col2": "KA-01-MJ-3390 · Geotagged",
    "status": "Delivered & POD Verified",
    "badge": "OTP Confirmed",
    "assignee": "Driver Mohan Gowda",
    "metricVal": "Completed",
    "createdAt": "Today, 16:50"
  },
  {
    "id": "WB-7724",
    "title": "FMCG Bulk Palletized Retail Stock (1.2 Metric Tons)",
    "col1": "Hyderabad Depot → Secunderabad Hub",
    "col2": "TS-09-UB-1102 · Staged",
    "status": "Manifest Created",
    "badge": "Geo-Fenced Route",
    "assignee": "Dispatch Lead Naresh",
    "metricVal": "4.0h ETA",
    "createdAt": "Today, 18:01"
  }
],
  demoUsers: [
  {
    "id": "usr-lg-1",
    "name": "Rajesh Singhania",
    "email": "director@fleetops.com",
    "password": "admin123",
    "role": "Operations Director & Fleet Commander",
    "badge": "Full Fleet Authority",
    "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=60",
    "department": "Executive Logistics",
    "permissions": [
      "All Fleet Control",
      "Manifest Sign-Off",
      "Carrier Contract Approval",
      "User Administration"
    ]
  },
  {
    "id": "usr-lg-2",
    "name": "Tariq Khan",
    "email": "dispatch.tariq@fleetops.com",
    "password": "dispatch123",
    "role": "Route Optimization Controller",
    "badge": "Dispatch Tower Lead",
    "avatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=60",
    "department": "Control Tower",
    "permissions": [
      "Dynamic Route Allocation",
      "Vehicle Scheduling",
      "Toll & Fuel Authorization"
    ]
  },
  {
    "id": "usr-lg-3",
    "name": "Sunita Rao",
    "email": "dock.sunita@fleetops.com",
    "password": "dock123",
    "role": "Cross-Dock Hub Supervisor",
    "badge": "Cross-Dock Specialist",
    "avatar": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&auto=format&fit=crop&q=60",
    "department": "Hub & Warehouse",
    "permissions": [
      "Inbound Scan Verification",
      "Pallet Triage",
      "Reefer Temperature Logs"
    ]
  },
  {
    "id": "usr-lg-4",
    "name": "Gurdeep Singh",
    "email": "driver.lead@fleetops.com",
    "password": "driver123",
    "role": "Long-Haul Fleet Captain",
    "badge": "e-POD Captain",
    "avatar": "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&auto=format&fit=crop&q=60",
    "department": "Interstate Freight",
    "permissions": [
      "Trip Check-in",
      "Electronic Proof of Delivery",
      "Fuel Telematics Sync"
    ]
  }
] as DomainDemoUser[],
  architecture: [
  {
    "id": "arch-1",
    "name": "public.logistics_records",
    "type": "Database Table",
    "description": "Primary Supabase PostgreSQL 16 relational data store with automated Row-Level Security (RLS).",
    "tech": "PostgreSQL 16 · Supabase",
    "status": "Active",
    "schema": "id TEXT PRIMARY KEY, title TEXT, col1_data TEXT, col2_data TEXT, status TEXT, badge TEXT, assignee TEXT, metric_value TEXT, created_at TIMESTAMPTZ"
  },
  {
    "id": "arch-2",
    "name": "logistics_telemetry_stream",
    "type": "Realtime Stream",
    "description": "Sub-second bi-directional WebSocket telemetry stream for instant multi-user state synchronization.",
    "tech": "WebSocket · Supabase Realtime",
    "status": "Synced",
    "schema": "channel('logistics:telemetry').on('postgres_changes', { event: '*', schema: 'public' })"
  },
  {
    "id": "arch-3",
    "name": "logistics_workflow_engine",
    "type": "Edge Function",
    "description": "Deno Edge Function enforcing automated business validation rules, SLA timers, and compliance audits.",
    "tech": "Deno · Edge Functions",
    "status": "Healthy",
    "schema": "POST /functions/v1/logistics-process { recordId, action, payload }"
  },
  {
    "id": "arch-4",
    "name": "logistics_integration_gateway",
    "type": "API Gateway",
    "description": "Secured REST & GraphQL gateway interfacing enterprise ERPs, legacy tools, and customer dispatch endpoints.",
    "tech": "PostgREST · HTTPS TLS 1.3",
    "status": "Active",
    "schema": "GET|POST /rest/v1/logistics_records (Authorized via JWT Bearer)"
  }
] as DomainArchitectureItem[],
  roadmap: [
  {
    "id": "sprint-1",
    "phase": "Phase 1: Foundation & Data Ingestion",
    "title": "Core Ingestion & Real-Time Pipeline Setup",
    "duration": "Weeks 1 - 3",
    "status": "Completed",
    "progress": 100,
    "tasks": [
      {
        "id": "t1-1",
        "title": "Initialize PostgreSQL 16 schema for Shipments",
        "done": true,
        "assignee": "Rajesh Singhania"
      },
      {
        "id": "t1-2",
        "title": "Configure automated input ingestion for Fleet Dispatch & Telematics Control",
        "done": true,
        "assignee": "Tariq Khan"
      },
      {
        "id": "t1-3",
        "title": "Enable cryptographic audit trail & RLS authorization",
        "done": true,
        "assignee": "Rajesh Singhania"
      },
      {
        "id": "t1-4",
        "title": "Deploy mobile responsive responsive layout across all viewports",
        "done": true,
        "assignee": "Sunita Rao"
      }
    ]
  },
  {
    "id": "sprint-2",
    "phase": "Phase 2: Workflow Automation & Telemetry",
    "title": "Automated Rules & Live Telematics Synchronization",
    "duration": "Weeks 4 - 6",
    "status": "In Progress",
    "progress": 75,
    "tasks": [
      {
        "id": "t2-1",
        "title": "Deploy Edge Function validation engine for Consignment Shipment triage",
        "done": true,
        "assignee": "Tariq Khan"
      },
      {
        "id": "t2-2",
        "title": "Connect bi-directional WebSocket telemetry stream",
        "done": true,
        "assignee": "Tariq Khan"
      },
      {
        "id": "t2-3",
        "title": "Integrate role-based approval gates and audit logs",
        "done": true,
        "assignee": "Gurdeep Singh"
      },
      {
        "id": "t2-4",
        "title": "Implement instant CSV reporting and analytics dashboard",
        "done": false,
        "assignee": "Sunita Rao"
      }
    ]
  },
  {
    "id": "sprint-3",
    "phase": "Phase 3: AI Intelligence & Ecosystem Scaling",
    "title": "Predictive SLA Optimization & Enterprise Scaling",
    "duration": "Weeks 7 - 10",
    "status": "Upcoming",
    "progress": 25,
    "tasks": [
      {
        "id": "t3-1",
        "title": "Train predictive SLA breach alert model on historical throughput",
        "done": false,
        "assignee": "Rajesh Singhania"
      },
      {
        "id": "t3-2",
        "title": "Connect external legacy ERP and billing gateways",
        "done": false,
        "assignee": "Tariq Khan"
      },
      {
        "id": "t3-3",
        "title": "Conduct full ISO / regulatory compliance security audit",
        "done": false,
        "assignee": "Gurdeep Singh"
      }
    ]
  }
] as DomainRoadmapSprint[],
};

const STORAGE_KEY = 'bizzmitra-apex-brands-amazon-fba-o-logistics_db_logistics_v1';
const USERS_STORAGE_KEY = 'bizzmitra-apex-brands-amazon-fba-o-logistics_users_logistics_v1';
const SPRINTS_STORAGE_KEY = 'bizzmitra-apex-brands-amazon-fba-o-logistics_sprints_logistics_v1';
const ACTIVE_SESSION_KEY = 'bizzmitra-apex-brands-amazon-fba-o-logistics_session_logistics_v1';

const SEED_DATA: DomainRecord[] = [
  {
    "id": "WB-7721",
    "title": "Precision Industrial CNC Spare Parts Consignment (480 kg)",
    "col1": "Mumbai Hub → Pune Central",
    "col2": "MH-12-RN-4021 · 62 km/h",
    "status": "In Transit",
    "badge": "On Schedule",
    "assignee": "Driver Ramesh Kumar",
    "metricVal": "1.5h ETA",
    "createdAt": "Today, 17:40"
  },
  {
    "id": "WB-7722",
    "title": "Cold-Chain Temperature Controlled Insulin Diagnostic Kits",
    "col1": "Delhi Airport → Gurgaon Lab",
    "col2": "DL-1A-EE-9012 · 45 km/h",
    "status": "Out for Delivery",
    "badge": "4°C Chilled OK",
    "assignee": "Driver Suresh Yadav",
    "metricVal": "25m ETA",
    "createdAt": "Today, 17:15"
  },
  {
    "id": "WB-7723",
    "title": "Enterprise Server Hardware & Rack Mount Switches",
    "col1": "Bengaluru East → Whitefield Tech Park",
    "col2": "KA-01-MJ-3390 · Geotagged",
    "status": "Delivered & POD Verified",
    "badge": "OTP Confirmed",
    "assignee": "Driver Mohan Gowda",
    "metricVal": "Completed",
    "createdAt": "Today, 16:50"
  },
  {
    "id": "WB-7724",
    "title": "FMCG Bulk Palletized Retail Stock (1.2 Metric Tons)",
    "col1": "Hyderabad Depot → Secunderabad Hub",
    "col2": "TS-09-UB-1102 · Staged",
    "status": "Manifest Created",
    "badge": "Geo-Fenced Route",
    "assignee": "Dispatch Lead Naresh",
    "metricVal": "4.0h ETA",
    "createdAt": "Today, 18:01"
  }
];

export async function fetchDatabaseRecords(): Promise<DomainRecord[]> {
  try {
    const cached = localStorage.getItem(STORAGE_KEY);
    if (cached) {
      return JSON.parse(cached);
    }
  } catch (e) {
    console.warn('Database cache read error', e);
  }
  return SEED_DATA;
}

export async function persistRecord(item: DomainRecord, existingRecords: DomainRecord[]): Promise<DomainRecord[]> {
  const updated = [item, ...existingRecords];
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  } catch (e) {
    console.error('Failed to persist record', e);
  }
  return updated;
}

export async function updateRecordStatus(id: string, status: string, records: DomainRecord[]): Promise<DomainRecord[]> {
  const updated = records.map(r => r.id === id ? { ...r, status } : r);
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  } catch (e) {
    console.error('Failed to update record in DB', e);
  }
  return updated;
}

export async function deleteRecord(id: string, records: DomainRecord[]): Promise<DomainRecord[]> {
  const updated = records.filter(r => r.id !== id);
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  } catch (e) {
    console.error('Failed to delete record from DB', e);
  }
  return updated;
}

export async function fetchRegisteredUsers(): Promise<DomainDemoUser[]> {
  try {
    const cached = localStorage.getItem(USERS_STORAGE_KEY);
    if (cached) {
      return JSON.parse(cached);
    }
  } catch (e) {
    console.warn('Users storage read error', e);
  }
  return DOMAIN_SCHEMA.demoUsers || [];
}

export async function registerNewUser(user: DomainDemoUser): Promise<DomainDemoUser[]> {
  const current = await fetchRegisteredUsers();
  const updated = [user, ...current];
  try {
    localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(updated));
  } catch (e) {
    console.error('Failed to register user to DB', e);
  }
  return updated;
}

export function getActiveSessionUser(users: DomainDemoUser[]): DomainDemoUser | null {
  try {
    const sessionEmail = localStorage.getItem(ACTIVE_SESSION_KEY);
    if (sessionEmail) {
      const found = users.find(u => u.email.toLowerCase() === sessionEmail.toLowerCase());
      if (found) return found;
    }
  } catch (e) {
    console.warn('Session read error', e);
  }
  return users[0] || null;
}

export function setActiveSessionUser(user: DomainDemoUser | null) {
  try {
    if (user) {
      localStorage.setItem(ACTIVE_SESSION_KEY, user.email);
    } else {
      localStorage.removeItem(ACTIVE_SESSION_KEY);
    }
  } catch (e) {
    console.warn('Failed to update active session', e);
  }
}

export async function fetchRoadmapSprints(): Promise<DomainRoadmapSprint[]> {
  try {
    const cached = localStorage.getItem(SPRINTS_STORAGE_KEY);
    if (cached) {
      return JSON.parse(cached);
    }
  } catch (e) {
    console.warn('Sprints storage read error', e);
  }
  return DOMAIN_SCHEMA.roadmap || [];
}

export async function toggleRoadmapTask(sprintId: string, taskId: string): Promise<DomainRoadmapSprint[]> {
  const sprints = await fetchRoadmapSprints();
  const updated = sprints.map(sprint => {
    if (sprint.id !== sprintId) return sprint;
    const newTasks = sprint.tasks.map(t => t.id === taskId ? { ...t, done: !t.done } : t);
    const completed = newTasks.filter(t => t.done).length;
    const progress = Math.round((completed / (newTasks.length || 1)) * 100);
    return { ...sprint, tasks: newTasks, progress };
  });
  try {
    localStorage.setItem(SPRINTS_STORAGE_KEY, JSON.stringify(updated));
  } catch (e) {
    console.error('Failed to update roadmap in DB', e);
  }
  return updated;
}

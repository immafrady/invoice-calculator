export interface FabConfig {
  title: string;
}

export interface ActionConfig {
  fabIcon: string;
  fabConfig: FabConfig[];
}

export interface RouteData {
  title?: string;
  actionConfig?: ActionConfig;
}

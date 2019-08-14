export class WindowModel {

  private static config: any = window["eruptSiteConfig"] || {};

  public static domain: string = WindowModel.config["domain"] || "";

  public static r_tools: CustomerTool[] = WindowModel.config["r_tools"] || [];

  public static amapKey: string = WindowModel.config["amapKey"];

  public static title: string = WindowModel.config["title"];

  public static routerReuse: boolean = WindowModel.config["routerReuse"] || false;

  public static desc: string = WindowModel.config["desc"] || null;
}


export interface CustomerTool {

  icon: string;

  text: string;

  mobileHidden: boolean;

  load(event: Event, token: string): void;

  click(event: Event, token: string): void;
}

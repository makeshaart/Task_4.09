export type Position = string;

export interface PluginOptions {
  selector(selector: any): unknown;
  initializedOptions: Position[];
  onPositionChange: (positions: Position[]) => void;
  onComplete: (positions: Position[]) => void;
  onInit: () => void;
}

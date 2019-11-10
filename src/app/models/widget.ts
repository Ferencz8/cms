import { WidgetType } from './widget.type';

export class Widget {
  id: number;

  name: string;

  content: string;

  type: WidgetType;

  isPublished: boolean;

  displayOrder: number;
}

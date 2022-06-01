export class SearchBox {
  static latest_id: number;
  readonly id: number;
  readonly headerText: string;

  constructor(header_text: string) {
    this.headerText = header_text;
    this.id = SearchBox.latest_id;
    SearchBox.latest_id++;
  }
}
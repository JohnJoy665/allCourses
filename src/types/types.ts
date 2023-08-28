export interface dataTag{
  tag_id: string,
  tag_name: string
}

export interface data{
  id: string,
  name: string,
  creation_date: string,
  status: string,
  yourself_start: string,
  tags: dataTag[]
}

export interface filterList {
  tag_id: string,
  tag_name: string
}

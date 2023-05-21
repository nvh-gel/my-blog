import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

export default interface WorkData {
  id: number;
  title: string;
  desc: string;
  full: string;
  img: string;
  date: Date;
  icon: IconDefinition;
}

import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

export default interface WorkData {
  id: number;
  title: string;
  content: string;
  img: string;
  date: Date;
  icon: IconDefinition;
  cat: string;
}

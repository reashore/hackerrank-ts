function getDayOfWeek(dateString: string) : string {
  const date: Date = new Date(dateString);
  const day: number = date.getDay();
  const weekDays: string[] = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const weekDayString : string = weekDays[day];
  return weekDayString;
}

export default function solveProblem12(): void {
  const dateString: string = "10/11/2009";
  const weekDayString : string = getDayOfWeek(dateString);
  console.log(dateString);
  console.log(weekDayString);
}

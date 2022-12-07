import { format } from "date-fns"
import { useRouter } from "next/router";

function dateFormat(date: Date) {
  const { locale } = useRouter()
  if (locale === 'en') return format(date, "MMM dd yyyy").toUpperCase();

  return format(date, "yyyy") + "年" + format(date, "MM") + "月" + format(date, "dd") + "日"
}

export { dateFormat };

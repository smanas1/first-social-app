interface DateProps {
  years: number[];
  month: number[];
  days: number[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  formik: any;
  // onChange:()=>void;
  // value: unknown;
  // onBlur:()=>void;
}

const Birthday: React.FC<DateProps> = ({ formik, years, month, days }) => {
  return (
    <div className="flex justify-between gap-1">
      <div className="border p-1">
        <label htmlFor="year">Year : </label>
        <select
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.bYear}
          name="bYear"
          id="year"
        >
          <option value={2221}>Year</option>
          {years.map((year, i) => (
            <option key={i}>{year}</option>
          ))}
        </select>
      </div>
      <div className="border p-1">
        <label htmlFor="month">Month : </label>
        <select
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.bMonth}
          name="bMonth"
          id="month"
        >
          {month.map((month, i) => (
            <option key={i}>{month}</option>
          ))}
        </select>
      </div>
      <div className="border p-1">
        <label htmlFor="day">Day : </label>
        <select
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.bDay}
          name="bDay"
          id="day"
        >
          {days.map((day, i) => (
            <option key={i}>{day}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Birthday;

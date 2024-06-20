interface OptionInterface {
  count: number;
  id: string;
  name: string;
  min?: number;
}

const Option: React.FC<OptionInterface> = ({ count, id, name, min }) => {
  const counter = [];
  for (let i = min! | 1; i <= count; i++) {
    counter.push(i);
  }
  return (
    <select name={name} id={id}>
      {counter.map((item, i) => (
        <option key={i} value={item}>
          {item}
        </option>
      ))}
    </select>
  );
};

export default Option;

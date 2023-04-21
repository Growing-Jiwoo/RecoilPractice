import Select from 'react-select';
import type { SelectBoxOption } from '../../Type/interface';

export default function SelectBox(props: {
  options: SelectBoxOption[];
  selectedOption: SelectBoxOption | null;
  onChange: (selectedOption: SelectBoxOption | null) => void;
}): JSX.Element {
  return (
    <Select
      className="basic-single"
      classNamePrefix="select"
      defaultValue={props.selectedOption}
      isClearable
      isSearchable
      name="color"
      options={props.options}
      onChange={props.onChange}
    />
  );
}

import PropTypes from "prop-types";
import { Input } from "semantic-ui-react";

const Search = ({ value, onChange }) => (
  <Input
    type="text"
    value={value}
    name="searchInput"
    onChange={onChange}
    icon="search"
    placeholder="Search..."
  />
);

Search.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
export default Search;

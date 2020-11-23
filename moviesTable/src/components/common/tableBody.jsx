import React, { Component } from "react";
import _ from "lodash";

class TableBody extends Component {
  createKey = (column, item) => {
    return item._id + (column.path || column.key);
  };
  renderItem = (column, item) => {
    if (column.content) return column.content(item);
    return _.get(item, column.path);
  };

  render() {
    const { data, columns } = this.props;
    return (
      <tbody>
        {data.map((item) => (
          <tr key={item._id}>
            {columns.map((column) => (
              <td key={this.createKey(column, item)}>
                {this.renderItem(column, item)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  }
}

export default TableBody;

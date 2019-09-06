# preact-paginate
## Installation

```shell
npm install preact-paginate -S
```

### This is how it looks
![Screenshot](/assets/pagination.png)

## Usage

Code Example:
```jsx
import Pagination from "preact-paginate";

onChangePageClick(pageNo) {
  this.setState({ currentPageNo: pageNo });
  //Pass this pageNo to your API call along with the number of records you want to display on one page
  console.log(pageNo);
}

render(
  <div>
    <Pagination count={this.state.totalPages || 255} currentPageNo={this.state.currentPageNo || 1} onChangePageClick={this.onChangePageClick()} />
  </div>,
  document.body
);
```

### Props

Properties used to customise the rendering:

| Name | Type | Description |
|:---- | ---- | ------ |
| count | Number*`(required)`* | Total Number of records to be displayed on list |
| currentPageNo | Number*`(required)`* | Current Page Number
| onChangePageClick | Function*`(required)`* | Callback function to be called when user clicks next / previous button

import { Component } from 'preact';
import Pagination from "preact-calendar";

export default class MyClass extends Component {

  componentWillMount() {
    this.state = {
      currentPageNo: 1,
      totalPages: 255  //Suppose you want to display total 255 records
    };
  }

  onChangePageClick(pageNo) {
    this.setState({ currentPageNo: pageNo });
    //Pass this pageNo to your API call along with the no of records you want to display on one page
    console.log(pageNo);
  }

  render({}) {
    return (
      <Pagination count={this.state.totalPages} currentPageNo={this.state.currentPageNo} onChangePageClick={this.onChangePageClick.bind(this)} />
    );
  }
}

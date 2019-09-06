import { h, Component } from 'preact';
import './style.css';

export default class Pagination extends Component {

  onPreviosPageClick() {
    this.props.onChangePageClick(Number(this.props.currentPageNo) - 1);
  }

  onNextPageClick() {
    this.props.onChangePageClick(Number(this.props.currentPageNo) + 1);
  }

  goToPage(e) {
    e.preventDefault();
    if (e.target.pageNoText.value !== '' && Math.ceil(this.props.count/10) >= e.target.pageNoText.value) {
      this.props.onChangePageClick(Number(e.target.pageNoText.value));
    }
    else {
      this.props.onChangePageClick(Math.ceil(this.props.count/10));
    }
  }

  render(props, {}) {
    if (!Number(props.count)) props.count = 1;
    return (
      <div class="pagination">
        <form onSubmit={this.goToPage.bind(this)}>
          <div>
            <span>
              <span>{props.currentPageNo} / {Math.ceil(props.count/10)}</span>
              <button type="button" class="button filter-btn" style="margin: 0 5px;" onClick={this.onPreviosPageClick.bind(this)}
                disabled={(props.currentPageNo && props.currentPageNo === 1)
                 || (this.state.pageNoText === 1)}>{'<'}</button>
              <input type="number" class="no-spinners" name="pageNoText"
                style="width:50px; margin: 0 3px 0 3px; height: 2rem; border-bottom: 0.5px solid #bbb6ad !important; border: none;"
                min="1" value={props.currentPageNo} required/>
              <button type="button" class="button filter-btn" style="margin: 0 5px;" onClick={this.onNextPageClick.bind(this)}
                disabled={(props.currentPageNo === (Math.ceil(props.count/10)))
                 || (this.state.pageNoText === (Math.ceil(props.count/10)))}>{'>'}</button>
            </span>
          </div>
        </form>
      </div>
    );
  }
}

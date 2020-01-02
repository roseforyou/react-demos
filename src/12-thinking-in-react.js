import React from 'react';
import ReactDOM from 'react-dom';
import '../assets/css/12-thinking-in-react.css';
import classNames from 'classnames/bind';

function App() {
  return (
    <div>
      <div id="demo1">
        <h2>React 哲学</h2>
      </div>
      <div id="demo2"></div>
      <div id="demo3">
        <hr></hr>
        <pre>
          <code>
            {/* prettier-ignore */}
            {`const data = [
  {
    category: 'Sporting Goods',
    price: '$49.99',
    stocked: true,
    name: 'Football',
  },
  {
    category: 'Sporting Goods',
    price: '$9.99',
    stocked: true,
    name: 'Baseball',
  },
  {
    category: 'Sporting Goods',
    price: '$29.99',
    stocked: false,
    name: 'Basketball',
  },
  {
    category: 'Electronics',
    price: '$99.99',
    stocked: true,
    name: 'iPod Touch',
  },
  {
    category: 'Electronics',
    price: '$399.99',
    stocked: false,
    name: 'iPhone 5',
  },
  { category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7' },
];
`}
          </code>
        </pre>
        <pre>
          <code>
            {/* prettier-ignore */}
            {`//Top search bar area
class Searchbar extends React.Component {
  constructor(props) {
    super(props);
    this.cbxChange = this.cbxChange.bind(this);
    this.inputChange = this.inputChange.bind(this);
  }
  //when input change will invoke parent event
  inputChange(e) {
    this.props.onInputChange(e.target.value);
  }
  //when checkbox change will invoke parent event
  cbxChange(e) {
    this.props.onCbxChange(e.target.checked);
  }

  render() {
    return (
      <div className="search-bar-area">
        <input
          className="search-bar-input"
          placeholder="Search..."
          onChange={this.inputChange}
        />
        <p className="search-bar-cbxarea">
          <input
            className="search-bar-cbx"
            type="checkbox"
            id="searchBar"
            value="first_checkbox"
            onChange={this.cbxChange}
          />
          <label
            className="search-bar-label"
            htmlFor="searchBar"
          >{\`Only show products in stock\`}</label>
        </p>
      </div>
    );
  }
}`}
          </code>
        </pre>
        <pre>
          <code>
            {/* prettier-ignore */}
            {`//Lowest level component
class ProductInfo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const nameClass = classNames({
      'products-area-info-name': true,
      blod: this.props.isBlod,
      red: this.props.isRed,
    });
    const priceClass = classNames({
      'products-area-info-price': true,
      blod: this.props.isBlod,
    });
    return (
      <ul className="products-area-info">
        <li className={nameClass}>{this.props.name}</li>
        <li className={priceClass}>{this.props.price}</li>
      </ul>
    );
  }
}`}
          </code>
        </pre>
        <pre>
          <code>
            {/* prettier-ignore */}
            {`//some one category products list component
class ProductCategory extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const categoryName = this.props.categoryName;
    const productsList = this.props.oneCategoryProductsList;

    return (
      <dl className="products-area-category">
        <dt className="products-area-category-name">{categoryName}</dt>
        <dd className="products-area-category-data">
          {productsList.map((product, index) => (
            <ProductInfo
              key={index}
              isRed={!product.stocked}
              name={product.name}
              price={product.price}
            />
          ))}
        </dd>
      </dl>
    );
  }
}
`}
          </code>
        </pre>
        <pre>
          <code>
            {/* prettier-ignore */}
            {`class ProductsDispaly extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const productsCategoryObj = this.props.productsCategoryObj;
    const productCategory = Object.keys(
      productsCategoryObj
    ).map((categoryName, index) => (
      <ProductCategory
        key={index}
        categoryName={categoryName}
        oneCategoryProductsList={productsCategoryObj[categoryName]}
      />
    ));

    return (
      <div className="products-area">
        <ProductInfo isBlod={true} name="Name" price="Price" />
        {productCategory}
      </div>
    );
  }
}
`}
          </code>
        </pre>
        <pre>
          <code>
            {/* prettier-ignore */}
            {`//The main component, handle between components data transmission
class Products extends React.Component {
  constructor(props) {
    super(props);
    this.searchInputOnChange = this.searchInputOnChange.bind(this);
    this.searchCbxOnChange = this.searchCbxOnChange.bind(this);
    this.dataFilter = this.dataFilter.bind(this);
    this.state = {
      searchText: '',
      isOnlyShowStock: false,
      filteredData: [],
      productsCategoryObj: {},
    };
  }

  componentDidMount() {
    this.dataFilter();
  }

  searchInputOnChange(searchText) {
    this.setState({ searchText }, () => {
      this.dataFilter();
    });
  }

  searchCbxOnChange(isOnlyShowStock) {
    this.setState({ isOnlyShowStock }, () => {
      this.dataFilter();
    });
  }
//when input checkbox change, will filter data, and refactoring products list data
  dataFilter() {
    const searchText = this.state.searchText.trim();
    const isOnlyShowStock = this.state.isOnlyShowStock;
    this.setState(
      {
        filteredData: this.props.data.filter(
          productInfo =>
            (isOnlyShowStock ? productInfo.stocked : true) &&
            (searchText
              ? productInfo.name.match(new RegExp(searchText, 'i'))
              : productInfo.name)
        ),
      },
      this.handleProductsList// React setState callback, because setState is asynchronous!
    );
  }
//Handle the checkbox or input filtered data to group by category.
  handleProductsList() {
    const productsCategoryObj = {};
    this.state.filteredData.forEach(product => {
      if (productsCategoryObj[product.category]) {
        Object.assign(productsCategoryObj, {
          [product.category]: [
            ...productsCategoryObj[product.category],
            product,
          ],
        });
      } else {
        productsCategoryObj[product.category] = [product];
        Object.assign(productsCategoryObj, {
          [product.category]: [product],
        });
      }
    });
    this.setState({
      productsCategoryObj,
    });
  }

  render() {
    return (
      <div>
        <Searchbar
          onCbxChange={this.searchCbxOnChange}
          onInputChange={this.searchInputOnChange}
        />
        <ProductsDispaly productsCategoryObj={this.state.productsCategoryObj} />
      </div>
    );
  }
}

ReactDOM.render(<Products data={data} />, document.getElementById('demo2'));
`}
          </code>
        </pre>
      </div>
      <div id="demo4"></div>
      <a href="/">return</a>
    </div>
  );
}
ReactDOM.render(<App />, document.getElementById('root'));
///////////////////

const data = [
  {
    category: 'Sporting Goods',
    price: '$49.99',
    stocked: true,
    name: 'Football',
  },
  {
    category: 'Sporting Goods',
    price: '$9.99',
    stocked: true,
    name: 'Baseball',
  },
  {
    category: 'Sporting Goods',
    price: '$29.99',
    stocked: false,
    name: 'Basketball',
  },
  {
    category: 'Electronics',
    price: '$99.99',
    stocked: true,
    name: 'iPod Touch',
  },
  {
    category: 'Electronics',
    price: '$399.99',
    stocked: false,
    name: 'iPhone 5',
  },
  { category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7' },
];
//Top search bar area
class Searchbar extends React.Component {
  constructor(props) {
    super(props);
    this.cbxChange = this.cbxChange.bind(this);
    this.inputChange = this.inputChange.bind(this);
  }
  //when input change will invoke parent event
  inputChange(e) {
    this.props.onInputChange(e.target.value);
  }
  //when checkbox change will invoke parent event
  cbxChange(e) {
    this.props.onCbxChange(e.target.checked);
  }

  render() {
    return (
      <div className="search-bar-area">
        <input
          className="search-bar-input"
          placeholder="Search..."
          onChange={this.inputChange}
        />
        <p className="search-bar-cbxarea">
          <input
            className="search-bar-cbx"
            type="checkbox"
            id="searchBar"
            value="first_checkbox"
            onChange={this.cbxChange}
          />
          <label
            className="search-bar-label"
            htmlFor="searchBar"
          >{`Only show products in stock`}</label>
        </p>
      </div>
    );
  }
}
//Lowest level component
class ProductInfo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const nameClass = classNames({
      'products-area-info-name': true,
      blod: this.props.isBlod,
      red: this.props.isRed,
    });
    const priceClass = classNames({
      'products-area-info-price': true,
      blod: this.props.isBlod,
    });
    return (
      <ul className="products-area-info">
        <li className={nameClass}>{this.props.name}</li>
        <li className={priceClass}>{this.props.price}</li>
      </ul>
    );
  }
}
//some one category products list component
class ProductCategory extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const categoryName = this.props.categoryName;
    const productsList = this.props.oneCategoryProductsList;

    return (
      <dl className="products-area-category">
        <dt className="products-area-category-name">{categoryName}</dt>
        <dd className="products-area-category-data">
          {productsList.map((product, index) => (
            <ProductInfo
              key={index}
              isRed={!product.stocked}
              name={product.name}
              price={product.price}
            />
          ))}
        </dd>
      </dl>
    );
  }
}

class ProductsDispaly extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const productsCategoryObj = this.props.productsCategoryObj;
    const productCategory = Object.keys(
      productsCategoryObj
    ).map((categoryName, index) => (
      <ProductCategory
        key={index}
        categoryName={categoryName}
        oneCategoryProductsList={productsCategoryObj[categoryName]}
      />
    ));

    return (
      <div className="products-area">
        <ProductInfo isBlod={true} name="Name" price="Price" />
        {productCategory}
      </div>
    );
  }
}

class Products extends React.Component {
  constructor(props) {
    super(props);
    this.searchInputOnChange = this.searchInputOnChange.bind(this);
    this.searchCbxOnChange = this.searchCbxOnChange.bind(this);
    this.dataFilter = this.dataFilter.bind(this);
    this.state = {
      searchText: '',
      isOnlyShowStock: false,
      filteredData: [],
      productsCategoryObj: {},
    };
  }

  componentDidMount() {
    this.dataFilter();
  }

  searchInputOnChange(searchText) {
    this.setState({ searchText }, () => {
      this.dataFilter();
    });
  }

  searchCbxOnChange(isOnlyShowStock) {
    this.setState({ isOnlyShowStock }, () => {
      this.dataFilter();
    });
  }

  dataFilter() {
    const searchText = this.state.searchText.trim();
    const isOnlyShowStock = this.state.isOnlyShowStock;
    this.setState(
      {
        filteredData: this.props.data.filter(
          productInfo =>
            (isOnlyShowStock ? productInfo.stocked : true) &&
            (searchText
              ? productInfo.name.match(new RegExp(searchText, 'i'))
              : productInfo.name)
        ),
      },
      this.handleProductsList
    );
  }

  handleProductsList() {
    const productsCategoryObj = {};
    this.state.filteredData.forEach(product => {
      if (productsCategoryObj[product.category]) {
        Object.assign(productsCategoryObj, {
          [product.category]: [
            ...productsCategoryObj[product.category],
            product,
          ],
        });
      } else {
        productsCategoryObj[product.category] = [product];
        Object.assign(productsCategoryObj, {
          [product.category]: [product],
        });
      }
    });
    this.setState({
      productsCategoryObj,
    });
  }

  render() {
    return (
      <div>
        <Searchbar
          onCbxChange={this.searchCbxOnChange}
          onInputChange={this.searchInputOnChange}
        />
        <ProductsDispaly productsCategoryObj={this.state.productsCategoryObj} />
      </div>
    );
  }
}

ReactDOM.render(<Products data={data} />, document.getElementById('demo2'));

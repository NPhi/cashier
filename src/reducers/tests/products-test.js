import expect from 'expect';
import reducer, * as fromProducts from '../products';
import {products} from '../../ProductData';

describe('products reducer',() => {
	it('should return id',() => {
		expect(fromProducts.getIdByName(products,"áo len 1")).toEqual(10);
	})
});
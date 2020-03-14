import { renderHook, act } from '@testing-library/react-hooks';
import { useShopState } from '../../../containers/Shop/useShopState';
import { shoppingCartList } from '../../dummyData/shoppingCartList';

beforeEach(() => {
  localStorage.removeItem('shoppingCart')
})

describe('useShopState', () => {
  it('filterShopListHandler - state has correct value when user searching product', () => {
    const { result } = renderHook(useShopState);
    act(() => result.current.filterShopListHandler({ target: { value: 'some-search-value' } }))
    expect(result.current.searchValue).toEqual('some-search-value')
  })

  it('toggleShoppingCartHandler - state has correct value when user open the Shopping Cart', () => {
    const { result } = renderHook(useShopState);
    act(() => result.current.toggleShoppingCartHandler())
    expect(result.current.openShoppingCart).toEqual(true)
  })

  it('toggleShoppingCartHandler - state has correct value when user clicked Shopping Cart Icon second time', () => {
    const { result } = renderHook(useShopState);
    act(() => result.current.toggleShoppingCartHandler())
    act(() => result.current.toggleShoppingCartHandler())
    expect(result.current.openShoppingCart).toEqual(false)
  })

  it('openSummaryModalHandler - state has correct value when user clicked Order button in ShoppingCart component', () => {
    const { result } = renderHook(useShopState);
    act(() => result.current.toggleShoppingCartHandler())
    act(() => result.current.openSummaryModalHandler())
    expect(result.current.openSummaryModal).toEqual(true)
    expect(result.current.openShoppingCart).toEqual(false)
  })

  it('closeSummaryModalHandler - state has correct value when user closed SummaryModal', () => {
    const { result } = renderHook(useShopState);
    act(() => result.current.openSummaryModalHandler())
    act(() => result.current.closeSummaryModalHandler())
    expect(result.current.openSummaryModal).toEqual(false)
  })

  it('openSuccessModalHandler - state has correct value when user clicked Order button in OrderSummary component', () => {
    const { result } = renderHook(useShopState);
    act(() => result.current.openSuccessModalHandler())
    expect(result.current.openSuccessModal).toEqual(true)
  })

  it('closeSuccessModalHandler - state has correct value when user clicked Order button in OrderSummary component', () => {
    const { result } = renderHook(useShopState);
    act(() => result.current.openSuccessModalHandler())
    act(() => result.current.closeSuccessModalHandler())
    expect(result.current.openSuccessModal).toEqual(false)
  })

  it('addToShoppingCartHandler - state has correct value when user add product to the ShoppingCart', () => {
    const { result } = renderHook(useShopState);
    act(() => result.current.addToShoppingCartHandler(shoppingCartList[1]))
    act(() => result.current.addToShoppingCartHandler(shoppingCartList[4]))
    expect(result.current.shoppingCartList).toEqual([shoppingCartList[1], shoppingCartList[4]])
  })

  it('addToShoppingCartHandler - state has correct value when user add same product multiple times', () => {
    const { result } = renderHook(useShopState);
    act(() => result.current.addToShoppingCartHandler(shoppingCartList[1]))
    act(() => result.current.addToShoppingCartHandler(shoppingCartList[1]))
    act(() => result.current.addToShoppingCartHandler(shoppingCartList[1]))
    expect(result.current.shoppingCartList).toEqual([{
      "id": 2,
      "name": "Evaporated Milk - Skim",
      "price": 53.54,
      "count": 3
    }])
  })

  it('deleteProductFromCartHandler - state has correct value when user delete from ShoppingCart', () => {
    const { result } = renderHook(useShopState);
    act(() => result.current.addToShoppingCartHandler(shoppingCartList[1]))
    act(() => result.current.addToShoppingCartHandler(shoppingCartList[3]))
    act(() => result.current.deleteProductFromCartHandler(shoppingCartList[1]))
    expect(result.current.shoppingCartList).toEqual([shoppingCartList[3]])
  })

  it('changePageHandler - state has correct value when user clicked next button', () => {
    const { result } = renderHook(useShopState);
    act(() => result.current.changePageHandler('next'))
    act(() => result.current.changePageHandler('next'))
    expect(result.current.currentPage).toEqual(3)
  })


  it('changePageHandler - state has correct value when user clicked back button', () => {
    const { result } = renderHook(useShopState);
    act(() => result.current.changePageHandler('next'))
    act(() => result.current.changePageHandler('next'))
    act(() => result.current.changePageHandler('back'))
    expect(result.current.currentPage).toEqual(2)
  })

  it('selectPageHandler - state has correct value when user change page in select', () => {
    const { result } = renderHook(useShopState);
    act(() => result.current.selectPageHandler({ target: { value: 4 } }))
    expect(result.current.currentPage).toEqual(4)
  })

  it('selectPageHandler - state has correct value when user change page in select', () => {
    const { result } = renderHook(useShopState);
    act(() => result.current.openSummaryModalHandler())
    act(() => result.current.finishOrderHandler())
    expect(result.current.openSummaryModal).toEqual(false)
    expect(result.current.openSuccessModal).toEqual(true)
  })
})
import React from 'react'
import CommonHeader from '../CommonComponent/CommonHeaderSection/CommonHeader'
import Detail from '../CommonComponent/DetailComponent/Detail'
import PurchaseToken from '../CommonComponent/PurchaseTokenSection/PurchaseToken'
import Wallet from '../CommonComponent/WalletComponent/Wallet'
import ScrollToTop from 'react-scroll-to-top'

export default function TokenIco() {
  return (
    <section>
      <ScrollToTop smooth color="#fff" />
        <CommonHeader headerHeading='Token ICO' activePageName='Token ICO' />
        <Detail />
        <PurchaseToken />
        <Wallet />
    </section>
  )
}

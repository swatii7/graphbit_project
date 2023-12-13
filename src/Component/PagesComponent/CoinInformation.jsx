import React from 'react'
import CommonHeader from '../CommonComponent/CommonHeaderSection/CommonHeader'
import Detail from '../CommonComponent/DetailComponent/Detail'
import Wallet from '../CommonComponent/WalletComponent/Wallet'
import ScrollToTop from 'react-scroll-to-top'

export default function CoinInformation() {
  return (
    <section>
      <ScrollToTop smooth color="#fff" />
        <CommonHeader headerHeading='Coin Information' activePageName='Coin Information' />
        <Detail />
        <Wallet />
    </section>
  )
}

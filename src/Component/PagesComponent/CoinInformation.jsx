import React from 'react'
import CommonHeader from '../CommonComponent/CommonHeaderSection/CommonHeader'
import Detail from '../CommonComponent/DetailComponent/Detail'
import Wallet from '../CommonComponent/WalletComponent/Wallet'

export default function CoinInformation() {
  return (
    <section>
        <CommonHeader headerHeading='Coin Information' activePageName='Coin Information' />
        <Detail />
        <Wallet />
    </section>
  )
}

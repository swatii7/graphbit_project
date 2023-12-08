import React from 'react'
import CommonHeader from '../CommonComponent/CommonHeaderSection/CommonHeader'
import Detail from '../CommonComponent/DetailComponent/Detail'
import PurchaseToken from '../CommonComponent/PurchaseTokenSection/PurchaseToken'
import Wallet from '../CommonComponent/WalletComponent/Wallet'

export default function TokenIco() {
  return (
    <section>
        <CommonHeader headerHeading='Token ICO' activePageName='Token ICO' />
        <Detail />
        <PurchaseToken />
        <Wallet />
    </section>
  )
}

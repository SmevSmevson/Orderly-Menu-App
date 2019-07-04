import React from 'react'
import CustomerMenuRecieptItem from './CustomerMenuRecieptItem'

import { reciept } from '../../MockData/reciept'

const CustomerMenuRecieptItemList = ({showImg}) => {
	return (
        <div className="confirm-receipt-container">
            {reciept.map((item) => {
				return <CustomerMenuRecieptItem key={item.id} item={item} showImg={showImg} />
			})}
		</div>
	)
}

export default CustomerMenuRecieptItemList

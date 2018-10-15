//
//  OrderHistoryTableViewCell.swift
//  AllInOne
//
//  Created by SUM PHAM on 10/14/18.
//  Copyright © 2018 SmartCity. All rights reserved.
//

import UIKit

class OrderHistoryTableViewCell: UITableViewCell {

    @IBOutlet weak var lblDate: UILabel!
    @IBOutlet weak var lblTotal: UILabel!
    @IBOutlet weak var lblNumber: UILabel!
    @IBOutlet weak var lblName: UILabel!
    override func awakeFromNib() {
        super.awakeFromNib()
        // Initialization code
    }

    override func setSelected(_ selected: Bool, animated: Bool) {
        super.setSelected(selected, animated: animated)

        // Configure the view for the selected state
    }
    
    func config(orderHistory: OrderHistory) {
        lblName.text = orderHistory.order.service?.name
        lblNumber.text = String(orderHistory.order.number)
        let dateFormatterGet = DateFormatter()
        dateFormatterGet.dateFormat = "dd/MM/yyyy"
        lblDate.text = dateFormatterGet.string(from: orderHistory.date)
        lblTotal.text = "Total: $ "  + String(Int(orderHistory.order.number) * Int((orderHistory.order.service?.price)!))
    }

}

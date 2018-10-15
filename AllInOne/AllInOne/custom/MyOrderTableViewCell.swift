//
//  MyOrderTableViewCell.swift
//  AllInOne
//
//  Created by SUM PHAM on 10/13/18.
//  Copyright © 2018 SmartCity. All rights reserved.
//

import UIKit

class MyOrderTableViewCell: UITableViewCell {
    @IBOutlet weak var imgImage: UIImageView!
    @IBOutlet weak var lblName: UILabel!
    @IBOutlet weak var lblNumber: UILabel!
    
    @IBOutlet weak var lblTotalPrice: UILabel!
    override func awakeFromNib() {
        super.awakeFromNib()
        // Initialization code
    }

    override func setSelected(_ selected: Bool, animated: Bool) {
        super.setSelected(selected, animated: animated)

        // Configure the view for the selected state
    }
    
    public func config(order: Order) {
        imgImage.image = UIImage(named: (order.service?.image)!)
        lblName.text = order.service?.name
        lblNumber.text = "Quantity:" + String(order.number)
        lblTotalPrice.text = "$ "  + String(Int(order.number) * Int((order.service?.price)!))
    }

}

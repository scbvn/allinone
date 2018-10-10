//
//  ServiceCollectionViewCell.swift
//  AllInOne
//
//  Created by SUM PHAM on 10/6/18.
//  Copyright © 2018 SmartCity. All rights reserved.
//

import UIKit

class ServiceCollectionViewCell: UICollectionViewCell {
    
    @IBOutlet weak var imgThumb: UIImageView!
    @IBOutlet weak var lblName: UILabel!
    
    public func configure(with service: Service) {
        imgThumb.image = UIImage(named: service.image)
        lblName.text = service.name
    }
}

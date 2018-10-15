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
    
    var service: Service
    
    required init?(coder aDecoder: NSCoder) {
        self.service = Service()
        super.init(coder: aDecoder)
        
    }
    
    public func configure(with service: Service) {
        self.service = service
        imgThumb.image = UIImage(named: service.image)
        lblName.text = service.name
    }
}

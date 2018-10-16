//
//  Service.swift
//  AllInOne
//
//  Created by SUM PHAM on 10/6/18.
//  Copyright © 2018 SmartCity. All rights reserved.
//

import UIKit

struct Service {
    
    var name = String()
    var price = Float()
    var content = String()
    var image = String()
    var subInfo = String()
    var dataType = 1    //0 for food, 1 for place, 2 for others
    var priceType = 1 //0 for perday, 1 for per house, 2 for per time
}

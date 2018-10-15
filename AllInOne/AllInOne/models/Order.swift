//
//  Order.swift
//  AllInOne
//
//  Created by SUM PHAM on 10/13/18.
//  Copyright © 2018 SmartCity. All rights reserved.
//

import Foundation

struct Order {
    var service: Service?
    var number: Int
    
    func calculateTotalAmount() -> Float {
        guard let _ = service, number > 0 else {
            return 0
        }
        return service!.price * Float(number)
    }
}

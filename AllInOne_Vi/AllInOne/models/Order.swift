//
//  Order.swift
//  AllInOne
//
//  Created by SUM PHAM on 10/13/18.
//  Copyright © 2018 SmartCity. All rights reserved.
//

import Foundation

struct Order: Codable {
    var service: Service?
    var number: Int
    var startTime: Date?
    var endTime: Date?
    func calculateTotalAmount() -> Float {
        guard let _ = service, number > 0 else {
            return 0
        }
        
        if(service?.dataType == 0) {
            return service!.price * Float(number)
        } else {
            //calculate duration
            return service!.price * Float(number)
        }
        
    }
}

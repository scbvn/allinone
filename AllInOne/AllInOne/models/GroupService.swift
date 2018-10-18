//
//  GroupService.swift
//  AllInOne
//
//  Created by SUM PHAM on 10/6/18.
//  Copyright © 2018 SmartCity. All rights reserved.
//

import Foundation

struct GroupService: Codable {
    var name = String()
    var image = String()
    var services = Array<Service>()
    var introducing = String()
    
    func getIntroducing() -> String {
        return String(services.count) + "" + introducing
    }
}

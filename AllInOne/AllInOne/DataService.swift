//
//  DataService.swift
//  AllInOne
//
//  Created by SUM PHAM on 10/7/18.
//  Copyright © 2018 SmartCity. All rights reserved.
//

import UIKit

struct DataService {
    static func getServiceData() -> Array<GroupService> {
        var servicesGroups = Array<GroupService>()
        
        var group1 = GroupService()
        group1.name = "Foods"
        group1.image = ""
        var services = Array<Service>()
        for _ in 1...10 {
            var service = Service()
            service.name = "Bun bo"
            service.content = "Bun bo xua hue"
            service.price = 50000
            services.append(service)
        }
        group1.services = services
        servicesGroups.append(group1)
        
        var group2 = GroupService()
        group2.name = "Beach"
        group2.image = ""
        group2.services = services
        servicesGroups.append(group2)
        
        var group3 = GroupService()
        group3.name = "Health Care"
        group3.image = ""
        group3.services = services
        servicesGroups.append(group3)
        
        var group4 = GroupService()
        group4.name = "Transportation"
        group4.image = ""
        group4.services = services
        servicesGroups.append(group4)
        
        var group5 = GroupService()
        group5.name = "Sport"
        group5.image = ""
        group5.services = services
        servicesGroups.append(group5)
        
        var group6 = GroupService()
        group6.name = "Utilities"
        group6.image = ""
        group6.services = services
        servicesGroups.append(group6)
        
        return servicesGroups
    }
}

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
        group1.image = "ic_foods"
        group1.introducing = " foods for today"
        var services = Array<Service>()
        for _ in 1...10 {
            var service = Service()
            service.name = "Bun bo Hue huong vi sai gon"
            service.content = "Bun bo xua hue"
            service.price = 50000
            service.image = "food"
            services.append(service)
        }
        group1.services = services
        servicesGroups.append(group1)
        
        var group2 = GroupService()
        group2.name = "Beach"
        group2.image = "beach"
        group2.introducing = " excited beach activities everyday"
        group2.services = services
        servicesGroups.append(group2)
        
        var group3 = GroupService()
        group3.name = "Health Care"
        group3.image = "health"
        group3.introducing = " health care services"
        group3.services = services
        servicesGroups.append(group3)
        
        var group4 = GroupService()
        group4.name = "Transportation"
        group4.image = "car"
        group4.introducing = " luxury transportation services"
        group4.services = services
        servicesGroups.append(group4)
        
        var group5 = GroupService()
        group5.name = "Sport"
        group5.image = "fitness"
        group5.introducing = " training services"
        group5.services = services
        servicesGroups.append(group5)
        
        var group6 = GroupService()
        group6.name = "Tools"
        group6.image = "tools"
        group6.introducing = " sports and facilities tools"
        group6.services = services
        servicesGroups.append(group6)
        
        return servicesGroups
    }
}

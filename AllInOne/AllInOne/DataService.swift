//
//  DataService.swift
//  AllInOne
//
//  Created by SUM PHAM on 10/7/18.
//  Copyright © 2018 SmartCity. All rights reserved.
//

import UIKit

var dataService = DataService()

struct DataService {
    
    var basketList = Array<Order>()
    var orderHistoryList = Array<OrderHistory>()
    
    static func getServiceData() -> Array<GroupService> {
        var servicesGroups = Array<GroupService>()
        
        var group1 = GroupService()
        group1.name = "Foods"
        group1.image = "ic_foods"
        group1.introducing = " foods for today"
        var services = Array<Service>()
        for _ in 1...10 {
            var service = Service()
            service.name = "Bun bo Hue"
            service.content = "“Bún Bò Huế” is very unusual by combining beef and pork in one dish harmoniously. It tastes sweet of bones borth, salty of Hue shrimp paste, sour of pineapples and spicy of chilies at once."
            service.price = 0
            service.image = "bunbo"
            service.subInfo = "250 calories"
            service.dataType = 2
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
        
        let jsonEncoder = JSONEncoder()
        let jsonData = try! jsonEncoder.encode(servicesGroups)
        let jsonString = String(data: jsonData, encoding: .utf8)
        print(jsonString)
        
        return servicesGroups
    }
    
    func getCart() -> Array<Order> {
        return basketList
    }
    
    mutating func addToCart(service: Service, number: Int) {
        let order = Order(service: service, number: number, startTime: nil, endTime: nil)
        self.basketList.append(order)
    }
    
    mutating func addToCart(service: Service, number: Int, startTime: Date, endTime: Date) {
        let order = Order(service: service, number: number, startTime: startTime, endTime: endTime)
        self.basketList.append(order)
    }
    
    mutating func clearCart() {
        self.basketList.removeAll()
    }
    
    mutating func addOrderHistory(order: Order) {
        let orderHistory = OrderHistory(order: order, date: Date())
        self.orderHistoryList.append(orderHistory)
    }
    
    func getHistory() -> Array<OrderHistory> {
        return orderHistoryList
    }
    
    static func loadDataFromFile() -> String? {
        if let filepath = Bundle.main.path(forResource: "data", ofType: "json") {
            do {
                let contents = try String(contentsOfFile: filepath)
                print(contents)
                return contents
            } catch {
                // contents could not be loaded
            }
        }
        return nil
    }
    
    func loadServiceData() -> Array<GroupService>? {
        if let stringData = DataService.loadDataFromFile() {
            let jsonDecoder = JSONDecoder()
            let groupServices = try! jsonDecoder.decode(Array<GroupService>.self, from: stringData.data(using: .utf8)!)
            return groupServices
        }
        return nil
    }
    
    func notifyToUpdateBadge() {
        NotificationCenter.default.post(name: .updateBadge, object: nil)
    }
}

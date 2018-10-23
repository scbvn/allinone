//
//  MyCartViewController.swift
//  AllInOne
//
//  Created by SUM PHAM on 10/13/18.
//  Copyright © 2018 SmartCity. All rights reserved.
//

import UIKit
import Toast_Swift

class MyCartViewController: UIViewController, UITableViewDelegate, UITableViewDataSource {
    
    
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return dataService.basketList.count
    }
    
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let cell = tableView.dequeueReusableCell(withIdentifier: "cart_item", for: indexPath) as! MyOrderTableViewCell
        cell.config(order: dataService.basketList[indexPath.row])
        return cell
    }
    
    func tableView(_ tableView: UITableView, heightForRowAt indexPath: IndexPath) -> CGFloat {
        return 170
    }
    

    @IBOutlet weak var lblTotalAmount: UILabel!
    @IBOutlet weak var btnPlaceOrder: UIButton!
    @IBOutlet weak var tbvOrders: UITableView!
    override func viewDidLoad() {
        super.viewDidLoad()

        // Do any additional setup after loading the view.
        tbvOrders.delegate = self
        tbvOrders.dataSource = self
        lblTotalAmount.text = "Total: $ " + String(calculateAmount())
    }
    
    override func viewDidAppear(_ animated: Bool) {
        if(dataService.basketList.count == 0) {
            tbvOrders.isHidden = true
        } else {
            tbvOrders.isHidden = false
            tbvOrders.reloadData()
        }
    }
    
    private func calculateAmount() -> Int {
        var amount = 0
        for order in dataService.basketList {
            amount += (order.number * Int((order.service?.price)!))
        }
        return amount
    }

    @IBAction func actionPlaceOrder(_ sender: Any) {
        self.view.makeToast("We are processing your order! Thanks")
        for order in dataService.basketList {
            let placeOrderHistory = OrderHistory(order: order, date: Date())
            dataService.addOrderHistory(order: order)
        }
        dataService.clearCart()
        tbvOrders.reloadData()
        tbvOrders.isHidden = true
        
    }
    /*
    // MARK: - Navigation

    // In a storyboard-based application, you will often want to do a little preparation before navigation
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        // Get the new view controller using segue.destination.
        // Pass the selected object to the new view controller.
    }
    */

}

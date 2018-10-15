//
//  OrderHistoryViewController.swift
//  AllInOne
//
//  Created by SUM PHAM on 10/14/18.
//  Copyright © 2018 SmartCity. All rights reserved.
//

import UIKit

class OrderHistoryViewController: UIViewController, UITableViewDelegate, UITableViewDataSource {
    @IBOutlet weak var tbvOrderHistory: UITableView!
    
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return dataService.getHistory().count
    }
    
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let cell = tableView.dequeueReusableCell(withIdentifier: "history_cell", for: indexPath) as! OrderHistoryTableViewCell
        cell.config(orderHistory: dataService.getHistory()[indexPath.row])
        return cell
    }
    
    func tableView(_ tableView: UITableView, heightForRowAt indexPath: IndexPath) -> CGFloat {
        return 70
    }
    

    override func viewDidLoad() {
        super.viewDidLoad()
        tbvOrderHistory.delegate = self
        tbvOrderHistory.dataSource = self
    }
    
    override func viewDidAppear(_ animated: Bool) {
        tbvOrderHistory.reloadData()
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

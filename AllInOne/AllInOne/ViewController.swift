//
//  ViewController.swift
//  AllInOne
//
//  Created by SmartCity on 10/2/18.
//  Copyright © 2018 SmartCity. All rights reserved.
//

import UIKit

class ViewController: UIViewController, UITableViewDelegate, UITableViewDataSource {
    
    var serviceData = Array<GroupService>()
    
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return serviceData.count
    }
    
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let cell = tableView.dequeueReusableCell(withIdentifier: "service_cell", for: indexPath) as! ServiceTableViewCell
        let item = serviceData[indexPath.row]
        cell.lblGroupTitle.text = item.name
        cell.lblNumOfDetail.text = String(item.services.count) + " for today"
        
        return cell
    }
    

    @IBOutlet weak var tbvServices: UITableView!
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view, typically from a nib.
        tbvServices.dataSource = self
        tbvServices.delegate = self
        serviceData = DataService.getServiceData()
    }


}


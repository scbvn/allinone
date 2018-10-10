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
        cell.lblNumOfDetail.text = item.getIntroducing()
        cell.imgGroupIco.image = UIImage(named: item.image)
        cell.services = item
        
        return cell
    }
    

    @IBOutlet weak var tbvServices: UITableView!
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view, typically from a nib.
        self.navigationItem.title = "Services"
        tbvServices.dataSource = self
        tbvServices.delegate = self
        serviceData = DataService.getServiceData()
        customNavigationBar()
    }
    
    func customNavigationBar() {
        self.navigationController?.navigationBar.setBackgroundImage(UIImage(), for: .default)
        self.navigationController?.navigationBar.shadowImage = UIImage()
        self.navigationController?.navigationBar.isTranslucent = true
    }


}


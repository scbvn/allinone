//
//  ViewController.swift
//  AllInOne
//
//  Created by SmartCity on 10/2/18.
//  Copyright © 2018 SmartCity. All rights reserved.
//

import UIKit

class ViewController: UIViewController, UITableViewDelegate, UITableViewDataSource, ServiceViewCellDelegator {
    
    var currentSelectedService: Service!
    
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
        cell.delegate = self
        
        return cell
    }
    
    func callSegueFromCell(data dataObject: Service) {
        currentSelectedService = dataObject
        if(dataObject.dataType == 0 || dataObject.dataType == 1) {
            performSegue(withIdentifier: "segue_detail", sender: dataObject)
        } else {
            performSegue(withIdentifier: "segue_tool", sender: dataObject)
        }
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
    
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        if( segue.identifier == "segue_detail") {
            let controller = segue.destination as! DetailViewController
            controller.service = self.currentSelectedService
        } else if(segue.identifier == "segue_tool") {
            let controller = segue.destination as! DetailToolViewController
            controller.service = self.currentSelectedService
        }
        
        
        
    }
    
    func customNavigationBar() {
        self.navigationController?.navigationBar.setBackgroundImage(UIImage(), for: .default)
        self.navigationController?.navigationBar.shadowImage = UIImage()
        self.navigationController?.navigationBar.isTranslucent = true
    }


}


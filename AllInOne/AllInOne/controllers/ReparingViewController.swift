//
//  ReparingViewController.swift
//  AllInOne
//
//  Created by SUM PHAM on 10/11/18.
//  Copyright © 2018 SmartCity. All rights reserved.
//

import UIKit
import DropDown
import Toast_Swift

class ReparingViewController: UIViewController {

    @IBOutlet weak var btnSubmit: UIButton!
    @IBOutlet weak var lblSelectedItem: UILabel!
    @IBOutlet weak var imgDownIcon: UIImageView!
    let dropDownList = DropDown()
    @IBOutlet weak var lblSelectItem: UILabel!
    override func viewDidLoad() {
        super.viewDidLoad()
        dropDownList.anchorView = lblSelectedItem
        dropDownList.dataSource = ["Air Conditional", "Washing Machine", "Water", "Chair", "Table", "Bed", "Others"]
        dropDownList.selectionAction = {[unowned self] (index: Int, item: String) in
            self.lblSelectedItem.font = self.lblSelectedItem.font.bold
            self.lblSelectedItem.text = item
        }
        lblSelectedItem.font = lblSelectedItem.font.italic
        
        
        let singleTap = UITapGestureRecognizer(target: self, action: #selector(ReparingViewController.tapDetected))
        imgDownIcon.isUserInteractionEnabled = true
        imgDownIcon.addGestureRecognizer(singleTap)
        
    }
    
    @objc func tapDetected() {
        dropDownList.show()
    }
    
    @IBAction func actionSubmit(_ sender: Any) {
        self.view.makeToast("Thanks for your report. We'll fix it in few seconds")
    }


}

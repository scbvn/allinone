//
//  DetailViewController.swift
//  AllInOne
//
//  Created by SUM PHAM on 10/10/18.
//  Copyright © 2018 SmartCity. All rights reserved.
//

import UIKit
import Toast_Swift

class DetailViewController: UIViewController {

    @IBOutlet weak var btnCallUs: UIButton!
    var service: Service!
    @IBOutlet weak var lblSubInfo: UILabel!
    @IBOutlet weak var lblPrice: UILabel!
    @IBOutlet weak var lblName: UILabel!
    @IBOutlet weak var stInOrderNumber: UIStepper!
    
    @IBOutlet weak var btnAddToCard: UIButton!
    @IBOutlet weak var lblTotalPrice: UILabel!
    @IBOutlet weak var lblOrderNumber: UILabel!
    @IBOutlet weak var lblMainContent: UITextView!
    @IBOutlet weak var imgCover: UIImageView!
    override func viewDidLoad() {
        super.viewDidLoad()
        imgCover.image = UIImage(named: service.image)
        lblName.text = service.name
        lblMainContent.text = service.content
        
        if(service.dataType == 1 || service.dataType == 3) {
            lblTotalPrice.isHidden = true
            lblPrice.isHidden = true
            stInOrderNumber.isHidden = true
            lblOrderNumber.isHidden = true
            btnAddToCard.isHidden = true
        }
        
        if(service.price > 0) {
            lblPrice.text = "$ " + String(service.price)
        } else {
            lblPrice.text = "Free"
            lblTotalPrice.isHidden = true
        }
        lblOrderNumber.text = "1"
        stInOrderNumber.minimumValue = 1.0
        lblSubInfo.text = service.subInfo
        let orderNumber = self.lblOrderNumber.text;
        lblTotalPrice.text = "$ "  + String(Int(orderNumber!)! * Int(service.price))
        if(service.dataType == 3) {
            btnCallUs.isHidden = false
            btnAddToCard.isHidden = true
            lblTotalPrice.isHidden = true;
        }
    }
    
    override func viewDidAppear(_ animated: Bool) {
        
    }
    

    @IBAction func actionStepChange(_ sender: UIStepper) {
        lblOrderNumber.text = Int(sender.value).description
        let orderNumber = self.lblOrderNumber.text;
        lblTotalPrice.text = "$ "  + String(Int(orderNumber!)! * Int(service.price))
    }
    
    @IBAction func actionAddToCart(_ sender: UIButton) {
        dataService.addToCart(service: service, number: Int(lblOrderNumber.text!)!)
        self.view.makeToast("Added to your cart")
        dataService.notifyToUpdateBadge()
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

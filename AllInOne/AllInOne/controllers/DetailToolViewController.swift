//
//  DetailToolViewController.swift
//  AllInOne
//
//  Created by SUM PHAM on 10/15/18.
//  Copyright © 2018 SmartCity. All rights reserved.
//

import UIKit
import DateTimePicker

class DetailToolViewController: UIViewController {

    @IBOutlet weak var lblPrice: UILabel!
    @IBOutlet weak var lblTotal: UILabel!
    @IBOutlet weak var stpNumberStep: UIStepper!
    @IBOutlet weak var lblNumber: UILabel!
    @IBOutlet weak var lblStartTime: UILabel!
    @IBOutlet weak var lblName: UILabel!
    @IBOutlet weak var imgImage: UIImageView!
    var service: Service!
    
    let min = Date().addingTimeInterval(-60 * 60 * 24 * 4)
    let max = Date().addingTimeInterval(60 * 60 * 24 * 4)
    var picker: DateTimePicker!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        picker = DateTimePicker.create(minimumDate: min, maximumDate: max)
        picker.completionHandler = { date in
            let formatter = DateFormatter()
            formatter.dateFormat = "hh:mm aa dd/MM/YYYY"
            self.lblStartTime.text = formatter.string(from: date)
            self.picker.removeFromSuperview()
        }
        // Do any additional setup after loading the view.
        configUI()
    }
    
    func configUI() {
        lblName.text = service.name
        switch service.priceType {
        case 0:
            lblPrice.text = "$ " + String(service.price) + " / day"
            break
        case 1:
            lblPrice.text = "$ " + String(service.price) + " / hour"
            break
        case 2:
            lblPrice.text = "$ " + String(service.price) + " / time"
            break
        default:
            break
        }
        stpNumberStep.minimumValue = 1
        let tap = UITapGestureRecognizer(target: self, action: #selector(DetailToolViewController.tapFunction))
        lblStartTime.isUserInteractionEnabled = true;
        lblStartTime.addGestureRecognizer(tap)
        lblTotal.text = String(service.price * 1)
        imgImage.image = UIImage(named: service.image)
        if(service.price == 0) {
            lblPrice.text = "free"
            lblTotal.text = "free"
        }
    }
    
    @IBAction func actionNumberChange(_ sender: UIStepper) {
        lblNumber.text = Int(sender.value).description
        if(service.price > 0) {
            
            let orderNumber = self.lblNumber.text;
            lblTotal.text = "$ "  + String(Int(orderNumber!)! * Int(service.price))
        }
    }
    @IBAction func actionPlaceOrder(_ sender: Any) {
        dataService.addToCart(service: service, number: Int(lblNumber.text!)!)
        self.view.makeToast("Added to your cart")
    }

    @objc func tapFunction() {
        print("tap working")
        showDateTimePicker()
    }
    
    func showDateTimePicker() {
        
        picker.frame = CGRect(x: 0, y: 100, width: picker.frame.size.width, height: picker.frame.size.height)
        self.view.addSubview(picker)
    }
    
    
    func hideDateTimePicker() {
        picker.removeFromSuperview()
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

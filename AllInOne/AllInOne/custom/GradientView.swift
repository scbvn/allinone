//
//  GradientView.swift
//  AllInOne
//
//  Created by SmartCity on 10/8/18.
//  Copyright © 2018 SmartCity. All rights reserved.
//

import UIKit

@IBDesignable
final class GradientView: UIView {
    @IBInspectable var startColor: UIColor = UIColor.clear
    @IBInspectable var endColor: UIColor = UIColor.clear
    
    override func draw(_ rect: CGRect) {
        let gradient : CAGradientLayer = CAGradientLayer()
        gradient.frame = CGRect(x: CGFloat(0), y: CGFloat(0), width: superview!.frame.size.width, height: superview!.frame.size.height)
        gradient.colors = [startColor.cgColor, endColor.cgColor]
        layer.addSublayer(gradient)
    }

}

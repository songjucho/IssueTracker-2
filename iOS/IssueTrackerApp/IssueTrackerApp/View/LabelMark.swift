//
//  LabelMark.swift
//  IssueTrackerApp
//
//  Created by 송주 on 2020/11/08.
//

import UIKit

class LabelMark: UILabel {
  override init(frame: CGRect) {
    super.init(frame: frame)
    configure()
  }
  
  required init?(coder: NSCoder) {
    super.init(coder: coder)
    configure()
  }
  
  private func configure() {
    layer.cornerRadius = 5
    layer.borderWidth = 1
    layer.borderColor = UIColor.lightGray.cgColor
    layer.backgroundColor = UIColor.lightGray.cgColor
  }
}

import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DefaultModal } from './default-modal/default-modal.component';
import { NotificationBarService, NotificationType } from 'ngx-notification-bar/release';
import { NotifyService } from 'ngx-notify';

@Component({
  selector: 'modals',
  styleUrls: ['./modals.scss'],
  templateUrl: './modals.html'
})
export class Modals {

  constructor(private modalService: NgbModal, private notificationBarService: NotificationBarService,
    private notifyService: NotifyService) {}
  ngAfterViewChecked() {
    this.notifyService.updateSetting({
      position : [ 'right', 'top' ],
      maxWidth : 500,
      minWidth : 500
    });
  }

  lgModalShow() {
    const activeModal = this.modalService.open(DefaultModal, {size: 'lg'});
    activeModal.componentInstance.modalHeader = 'Large Modal';
  }
  smModalShow(): void {
    const activeModal = this.modalService.open(DefaultModal, {size: 'sm'});
    activeModal.componentInstance.modalHeader = 'Small Modal';
  }

  staticModalShow() {
    const activeModal = this.modalService.open(DefaultModal, {size: 'sm',
                                                              backdrop: 'static'});
    activeModal.componentInstance.modalHeader = 'Static modal';
    activeModal.componentInstance.modalContent = `This is static modal, backdrop click
                                                    will not close it. Click × or confirmation button to close modal.`;
  }

  childModalShow() {
    const activeModal = this.modalService.open(DefaultModal, {size: 'sm'});
    activeModal.componentInstance.modalHeader = 'Child modal';
    activeModal.componentInstance.modalContent = `I am a child modal, opened from parent component!`;
  }

  showSuccessMsg() {
    // this.notifyService.success('title', 'content', {lastOnBottom : false});
    // // this.notificationBarService.create({ message: 'Hi', type: NotificationType.Success});
    this.notifyService.success('Hello world!', 'Toastr fun!', { timeout: 1000 * 100, rtl : true,className : 'notifies-template', })
    


    this.notifyService.html('title', 'Well done! You successfully read this important alert message.',
      `<div class="ng-scope">
        <div class="alert bg-warning">
          <!-- <h4>Warning!</h4> -->
          <strong>Pay attention.</strong>
           Change a few things up and try submitting again.
            <div class="control-alert">
              <button type="button" class="btn btn-danger">
                Pay Attention
              </button> 
              <button type="button" class="btn btn-primary">
                Ignore
              </button>
            </div>
          </div>
        </div>
      `,"",
      { 
        animate_in: 'fadeInLeft', 
        animate_out: 'fadeOutRight',
        className : 'abcdef',
        timeout: 1000 * 100  
      }
  );


this.notifyService.success('title', 'content', { 
  animate_in: 'fadeInLeft', 
  animate_out: 'fadeOutRight' 
});


    

  }

  showInfoMsg() {
    this.notifyService.info('title', 'content');

  }

  showWarningMsg() {
    this.notifyService.error('title', 'content', { 
      theme: 'bootstrap'
  });
  }

  showErrorMsg() {
    this.notifyService.error('title', 'content');
  }
}

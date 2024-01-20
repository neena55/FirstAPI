// Import necessary Angular modules and components
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';

// Import your application components

// Define the main module using the @NgModule decorator
@NgModule({
  declarations: [AppComponent],
    // List all components, directives, and pipes used in the application
    

  imports: [
    // List all modules that the application depends on
    BrowserModule,
    CommonModule, 
    FormsModule,
    HttpClientModule,
    // ... other modules
  ],
  providers: [],
  bootstrap: [AppComponent],
})
// Export the module class
export class AppModule {}
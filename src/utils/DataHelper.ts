export class DateHelper {
  static formatPTBR(date: string) {
    return new Date(date).toLocaleDateString('pt-br', {
      year: 'numeric', 
      month: 'long', 
      day: '2-digit'
    })
  }
}